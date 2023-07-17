import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

const Page = async () => {
  const session = await getServerSession(options);

  return (
    <>
      {session ? <div>la session est oui</div> : <div>la session est non</div>}
    </>
  );
};

export default Page;
