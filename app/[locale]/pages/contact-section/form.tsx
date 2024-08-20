'use client';

import { Input } from '@/components/ui/input';
import { Button } from '../../components/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { FiSend } from 'react-icons/fi';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  message: z.string().min(5).max(1000),
});

type ContactFormDataType = z.infer<typeof contactFormSchema>;

export const FormSection = () => {
  const t = useTranslations('Form');

  const { handleSubmit, register, reset } = useForm<ContactFormDataType>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormDataType) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('E-mail enviado com sucesso!');
        reset();
        toast({
          title: 'Formulário enviado!',
          description: 'Vou entrar em contato em breve!',
        });
      } else {
        console.error('Erro ao enviar o e-mail.');
      }
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex flex-col justify-center items-center gap-y-4 lg:w-[65%]"
      >
        <Label className="self-start">{t('name')}</Label>
        <Input
          type="text"
          className="bg-gray-200/70 dark:bg-gray-800/85 focus-visible:ring-emerald-500"
          placeholder={t('name-placeholder')}
          {...register('name')}
        />

        <Label className="self-start">{t('email')}</Label>
        <Input
          type="email"
          className="bg-gray-200/70 dark:bg-gray-800/85 focus-visible:ring-emerald-500"
          placeholder={t('email-placeholder')}
          {...register('email')}
        />

        <Label className="self-start">{t('message')}</Label>
        <Textarea
          className="bg-gray-200/70 dark:bg-gray-800/85 size-48 w-full focus-visible:ring-emerald-500"
          placeholder={t('message-placeholder')}
          maxLength={500}
          {...register('message')}
        />
        <Button type="submit">
          {t('button')} <FiSend />
        </Button>
      </form>
      <Toaster />
    </div>
  );
};
