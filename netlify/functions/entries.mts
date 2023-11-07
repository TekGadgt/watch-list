
import { type Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_ANON_KEY || '');

const handler: Handler = async (event, context) => {
  try {
    const { data, error } = await supabase
      .from('watchEntries')
      .select('*');

    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Unknown Error' }),
    };
  }
};

export { handler };
