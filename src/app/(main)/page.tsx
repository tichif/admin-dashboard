import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';

import DashboardCard from '@/components/dashboard/DashboardCard';
import PostsTable from '@/components/posts/PostsTable';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';

export default function Home() {
  return (
    <>
      <div className='flex flex-col justify-between gap-5 mb-5 md:flex-row'>
        <DashboardCard
          icon={<Newspaper className='text-slate-500' size={72} />}
          title='Posts'
          count={100}
        />
        <DashboardCard
          icon={<Folder className='text-slate-500' size={72} />}
          title='Categories'
          count={12}
        />
        <DashboardCard
          icon={<User className='text-slate-500' size={72} />}
          title='Users'
          count={750}
        />
        <DashboardCard
          icon={<MessageCircle className='text-slate-500' size={72} />}
          title='Comments'
          count={1200}
        />
      </div>
      <AnalyticsChart />
      <PostsTable title='Latests Posts' limit={5} />
    </>
  );
}
