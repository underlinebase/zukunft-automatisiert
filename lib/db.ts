import { supabase } from './supabase';
import type { Article } from './types';
import { STATIC_ARTICLES } from './static-data';

export async function getArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('id');
  if (error || !data || data.length === 0) return STATIC_ARTICLES;
  return data;
}

export async function getArticle(slug: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single();
  if (error || !data) return STATIC_ARTICLES.find(a => a.slug === slug) ?? null;
  return data;
}
