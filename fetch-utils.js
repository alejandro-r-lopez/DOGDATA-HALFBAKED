const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getDogs() {
    const { data, error } = await client.from('dogs').select('*, dog_breeds (name)');
    return data;
    // from the dogs table, select all items
    // and return the response
}

export async function getDog(id) {
    const { data, error } = await client
        .from('dogs')
        .select(`*, dog_breeds (name)`)
        .eq('id', id)
        .single();

    return data;

    // from the dogs table, select a single dog who has the matching id
    // and return the response
}
