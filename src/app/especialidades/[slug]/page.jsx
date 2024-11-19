import data from "@/Data/data.json";
import Especialidades from "@/ui/Especialidades/Especialidades";

const metadataBase = new URL(
  "https://tvncomdev--tvn-web-com-dev.us-central1.hosted.app"
);

export async function generateMetadata({ params }) {
  const { slug } = await params; // Asegúrate de esperar los datos correctamente si es necesario.
  const section = data[slug];

  if (!section) {
    return {
      title: "Default Title",
      description: "Default description",
      openGraph: {
        title: "Default Title",
        description: "Default description",
        images: [
          {
            url: "/default-image.jpg",
            width: 800,
            height: 600,
            alt: "Default Title",
          },
        ],
      },
      metadataBase,
    };
  }

  const metadata = {
    title: section.title,
    description: section.descripcion,
    image: section.imgOg,
  };

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: [
        {
          url: metadata.image,
          width: 800,
          height: 600,
          alt: metadata.title,
        },
      ],
    },
    metadataBase,
  };
}

export default async function Page({ params }) {
  const { slug } = await params; // Asegúrate de esperar los datos correctamente si es necesario.
  const section = data[slug];

  if (!section) {
    return <div>Section not found</div>;
  }

  return (
    <>
      <Especialidades variable={slug} />
    </>
  );
}
