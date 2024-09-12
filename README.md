This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Fork the repository (For first time)

```bash
git clone https://github.com/100x-Devs/Learning-Management-System
```

Install dependencies:

```bash
npm install
```

Download the `ca.pem` file from the `Aiven console` and put it inside `prisma` folder: </br>
Create a new `.env` file in the root folder Add add the following:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= (Your Key)
CLERK_SECRET_KEY= (Your Key)

UPLOADTHING_SECRET= (Your Key)
UPLOADTHING_APP_ID= (Your Key)

DATABASE_URL= (Your Key)

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

MUX_TOKEN_ID= (Your Key)
MUX_TOKEN_SECRET= (Your Key)
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To view the MySQL database (Prisma Studio):

```bash
npx prisma studio
```

Then open [http://localhost:5555](http://localhost:5555) to view the database.

## Steps for contributors

Before you make any code changes, run the following commands to sync with the latest code changes:

```bash
git fetch origin
```

```bash
git merge origin/main
```

If you make any changes in the `schema.prisma` file:

```bash
npx prisma generate
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Progress

# LMS Timestamp Section Status (Working/Completed/Notrequired)

1 : Completed by Arnab Ghosh</br>
2 : Completed by Arnab Ghosh</br>
3 : Completed by Arnab Ghosh</br>
4 : Completed by Arnab Ghosh</br>
5 : Completed by Sayak Modak</br>
6 : Completed by Sayak Modak</br>
7 : Completed by Ajit Prasad</br>
8 : Completed by Arnab Ghosh</br>
9 : Completed by Arnab Ghosh</br>
10 : Completed by Arnab Ghosh</br>
11 : Completed by Sayak Modak</br>
12 : Completed by Sayak Modak</br>
13 Upload Thing and Image Form : Completed by Sayak Modak</br>
14 Course Category Form : Completed by Sayak Modak</br>
15 Price Form : Completed by Sayak Modak </br>
16 Course Attachment Form : Completed by Arnab Ghosh </br>
17 Prisma schema finalization : Completed by Arnab Ghosh</br>
18 Chapter Creation API : Completed by Arnab Ghosh</br>
19 Chapter Reorder Functionality: : Completed by Arnab Ghosh/Sayak Modak</br>
20 Chapter Edit Page UI : Completed by Sayak Modak</br>
21 Chapter Description Form : Completed by Sayak Modak</br>
22 Chapter Access Form : Completed by Sayak Modak</br>
23 Mux Setup & Chapter Video Form : Completed by Arnab Ghosh</br>
24 Chapter Publish Action : Completed by Arnab Ghosh</br>
25 Course Publish Action : Completed by Arnab Ghosh</br>
26</br>
27</br>
28</br>
29</br>
30</br>
31</br>
32</br>
33</br>
34</br>
35</br>
36</br>
37</br>
38</br>

# Landing Page Timestamp Section Status (Working/Completed/Notrequired)

1</br>
2</br>
3</br>
4</br>
5</br>
6</br>
7</br>
8</br>
9</br>
10</br>
11</br>
12</br>
13</br>
