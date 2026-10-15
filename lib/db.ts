import { supabase } from './supabase';
import type { Service, Case, Article, NewsItem } from './types';
import { STATIC_SERVICES, STATIC_CASES, STATIC_ARTICLES, STATIC_NEWS } from './static-data';

export async function getServices(): Promise<Service[]> {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('idx');
  if (error || !data || data.length === 0) return STATIC_SERVICES;
  return data;
}

export async function getService(slug: string): Promise<Service | null> {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('slug', slug)
    .single();
  if (error || !data) return STATIC_SERVICES.find(s => s.slug === slug) ?? null;
  return data;
}

export async function getCases(): Promise<Case[]> {
  const { data, error } = await supabase
    .from('cases')
    .select('*')
    .order('idx');
  if (error || !data || data.length === 0) return STATIC_CASES;
  return data;
}

export async function getCase(slug: string): Promise<Case | null> {
  const { data, error } = await supabase
    .from('cases')
    .select('*')
    .eq('slug', slug)
    .single();
  if (error || !data) return STATIC_CASES.find(c => c.slug === slug) ?? null;
  return data;
}

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

export async function getNews(): Promise<NewsItem[]> {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .order('id', { ascending: false });
  if (error || !data || data.length === 0) return STATIC_NEWS;
  return data;
}
