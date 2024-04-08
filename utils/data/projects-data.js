import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'E-commerce platform',
        description: "I mostly got to work in Frontend where I made components that are used throughout the app such as the Navbar and many full pages such as: the 'Cart' page where you can see the products you have in your cart with price, name, etc. I made the 'Sign in' page where customers can log in, 'Forgot-password' and 'Reset-password' pages where you can reset passwords. In addition, I have made the 'Products' page where you can see products that are based on which company the logged in account is linked to, I made the 'Product/…' page where you can see the product's specifications, description and width, height. Last but not least, I made the 'order-confirmation' page where you can see an overview of your order and here the customer has to upload a file or image to be printed on the products you have ordered. In Backend I have made 2 pages; one where you can see all orders and the other shows specific order data that you access from the page before, here you also access the files and images that the customer uploads, all this data comes from the Backend API.",
        tools: ['NextJs', 'MongoDB', ' SwellJs (CMS) API', 'Tailwind', 'NextUI', 'TanstackQuery ', 'UploadThing'],
        role: 'Fullstack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'LinkHub – Personal project',
        description: 'A full stack web application that I have developed in my spare time. In this app, you can easily create an account using several different ways to log in with OAuth or create an account. The main point of the app is that you can easily share your social profiles/accounts. Linkhub.blog',
        tools: ['NextJS', 'Tailwind CSS', "Clerk", "Mongodb", "TypeScript", "Shadcn",],
        role: 'Full Stack Developer',
        code: '',
        demo: 'Linkhub.blog',
        image: travel,
    },
    {
        id: 3,
        name: 'HariMDB – Personal project',
        description: 'A frontend web application that I have developed in my spare time.HariMDB is an online database of information related to movies, television series, podcasts, home videos, video games, and online streaming content including cast, production crew, and personal biographies, plot summaries, trivia, ratings, and fan and critical reviews. harimdb.com',
        tools: ['NextJS', 'Tailwind', 'NextUI', 'Themoviedb (API)', 'TypeScript', ],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
   
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },