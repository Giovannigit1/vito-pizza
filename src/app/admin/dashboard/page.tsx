import { createClient } from '@/lib/supabase/server';
import { DashboardClient } from './DashboardClient';
import { redirect } from 'next/navigation';

export const instant = false; // El dashboard no se debe cachear

export default async function DashboardPage() {
  const supabase = await createClient();
  
  // Extra check de seguridad
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect('/admin/login');
  }

  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('name', { ascending: true });

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <DashboardClient initialProducts={products || []} />
    </main>
  );
}
