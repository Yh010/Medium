import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/user/signup', (c) => {
  return c.text('Hello Hono!')
});


app.post('/api/v1/user/signin', (c) => {
  return c.text('Hello Hono!')
});


app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})


app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
});


app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
});

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('Hello Hono!')
})

/* postgresql://Yh010:uR6ISxoWidy8@ep-still-cherry-a5ycjgb4.us-east-2.aws.neon.tech/medium?sslmode=require */

/* prisma accelerate key: DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNDYzOTNmYzEtYzUzZC00NDY0LTlmNjQtNWI2M2FjNzFlYTQzIiwidGVuYW50X2lkIjoiY2RhYjYwMTQ0Njc2NWZkOTQzYzBiM2U5ZGE5YTZhMThhNTQyNTE4NTlmMTlkZTM0ZjczOTgxODI4NWY5ZjY1NCIsImludGVybmFsX3NlY3JldCI6IjllNTMzYzAyLTM5ZTgtNDM3YS05YzRkLTEwOWQyMTg1ZTNhNiJ9.zKYuc79zrSpi43_AkjagQWoSz7yOqF399E0NpSMhR0I"*/


export default app
