export interface Blog {
    date:string,
    author: string,
    title: string,
    description: string,
    image: string,
    link: string
}
export interface Blogs {
    body:[Blog]
}