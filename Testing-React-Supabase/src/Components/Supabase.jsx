import { createClient } from "@supabase/supabase-js";

const Supabase = createClient(
    "https://uhuywinqzsnfgcmrpovu.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVodXl3aW5xenNuZmdjbXJwb3Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1OTg2MzgsImV4cCI6MjA2MTE3NDYzOH0._lAdZv6ES4bc0hMjaTfIXW0LMJnDjRUqZujl9DIu4j4"
  );

export default Supabase;

