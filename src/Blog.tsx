import data from "./data";

type Data = {
  id: number;
  title: string;
  img: string;
  contentCreator: string;
};

console.log(data);
const Blog = () => {
  return (
    <section className="container">
      <article className="blog">
        {data.map((item: Data) => {
          return (
            <div className="card" key={item.id}>
              <img src={item.img} alt={`image number: ${item.id}`} />
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Blog;
