import supabase from "./supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  // Verifica se há algum usuário logado atualmente
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  // Por mais que consigamos utilizar o usuário do getSession, é mais seguro requisitar o supabase novamente:
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
