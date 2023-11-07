
import { type Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_ANON_KEY || '');

const handler: Handler = async (event, context) => {
  try {
    const { body } = event;
    const data = JSON.parse(body || '{}');

    // Save data to Supabase
    const { data: savedData, error } = await supabase
      .from('watchEntries')
      .insert({ data: data, author: 'Ryan McGovern' });

    if (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error saving data to Supabase' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Data saved to Supabase' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error processing webhook data' }),
    };
  }
};

export { handler };
