import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  nom: string;
  email: string;
  telephone: string;
  message: string;
  type: 'contact' | 'candidature';
}

export async function submitContactForm(data: ContactSubmission) {
  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([{ ...data }]); // <-- c’est ici qu’il manquait la fermeture

  if (error) {
    throw error;
  }

  return result; // retourne les données insérées
}
