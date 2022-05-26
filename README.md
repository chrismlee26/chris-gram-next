# chrisgram v2

- chrisgram v2 is a image sharing guestbook application for [chrislee.wtf](https://chrislee.wtf)
- chrisgram v1 (Dockerized + MERN Stack) can be found [here](https://github.com/chrismlee26/chris-gram)
<br>

- Front-End: Next.js
- UI: TailwindCSS
- Auth: Supabase
- DB: Supabase

#### To install dependencies:

```zsh
npm i
```
#### To run the development server (dev):

```zsh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view application.

## Todo List for v2
- [x] Match styling to chrislee.wtf
- [x] Create Feed (main) component
  - [ ] Create 1x Post component
  - [ ] Create Posts component (Map Post)
  - [ ] Create Upload component
  - [ ] Enable infinite scroll on feed
- [x] Create and connect to Supabase DB
- [ ] Decide on types for DB Table & pass to variables
- [ ] Auth (Supabase)
  - [ ] Login
  - [ ] Likes
  - [ ] Upload
- [ ] Integrate into chrislee.wtf as guestbook