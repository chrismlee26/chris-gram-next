import { createClient } from '@supabase/supabase-js'

const chrisgramServer = process.env.CHRISGRAM_SERVER
const chrisgramSecretKey = process.env.CHRISGRAM_SECRET_KEY

export const supabase = createClient(chrisgramServer, chrisgramSecretKey)