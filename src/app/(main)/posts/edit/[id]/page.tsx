'use client';

import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import BackButton from '@/components/BackButton';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import posts from '../../../../../../data/post';
import { useToast } from '@/components/ui/use-toast';

const FormSchema = zod.object({
  title: zod.string({ required_error: 'The title is required' }).min(3, {
    message: 'The title should have a length superior or equal to 3 characters',
  }),
  body: zod.string({ required_error: 'The body is required' }).min(3, {
    message: 'The body should have a length superior or equal to 3 characters',
  }),
  author: zod.string({ required_error: 'The author is required' }).min(3, {
    message:
      'The author should have a length superior or equal to 3 characters',
  }),
  date: zod.string({ required_error: 'The date is required' }).min(3, {
    message: 'The date should have a length superior or equal to 3 characters',
  }),
});

interface Props {
  params: { id: string };
}

const EditPostPage = ({ params }: Props) => {
  const post = posts.find((post) => post.id === params.id);
  const { toast } = useToast();

  const form = useForm<zod.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: post?.title || '',
      body: post?.body || '',
      author: post?.author || '',
      date: post?.date || '',
    },
  });

  const handleSubmit = (data: zod.infer<typeof FormSchema>) => {
    // console.log(data);
    toast({
      title: 'Post has been updated successfully',
      description: `Updated by ${post?.author} on ${post?.date}`,
    });
  };

  return (
    <>
      <BackButton text='Back to Posts' link='/posts' />
      <h3 className='text-2xl mb-4'>Edit Form</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter title'
                    {...field}
                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='body'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Enter Body'
                    {...field}
                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='author'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter author'
                    {...field}
                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='date'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter date'
                    {...field}
                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='w-full dark:bg-slate-800 dark"text-white'>
            Update Post
          </Button>
        </form>
      </Form>
    </>
  );
};

export default EditPostPage;
