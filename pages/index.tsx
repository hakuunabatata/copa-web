interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {
  const { count = 0 } = { count: 2 };

  return <h1>Count: {props.count}</h1>;
}

export const getServerSideProps = async () => {
  const { count } = await fetch("http://localhost:3333/pools/count").then(
    (res) => {
      return res.json();
    }
  );

  return {
    props: { count }
  };
};
