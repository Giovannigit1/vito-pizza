import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yjqwwpiltrypuvvzxcza.supabase.co';
const supabaseKey = 'sb_publishable_6UxilHa9tJ276_bEHBoOKw_ENd7Qenh';
const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  console.log('Fetching categories...');
  const { data: categories, error: catError } = await supabase.from('categories').select('*');
  console.log('Cat Error:', catError);
  
  console.log('Fetching products...');
  const { data: products, error: prodError } = await supabase.from('products').select('*');
  console.log('Prod Error:', prodError);

  console.log('Fetching sizes...');
  const { data: sizes, error: sizeError } = await supabase.from('product_sizes').select('*');
  console.log('Size Error:', sizeError);
}

test();
