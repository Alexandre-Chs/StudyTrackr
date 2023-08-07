import React from "react";
import { LogOut } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const Logout = () => {
  // const supabase = createClientComponentClient();
  // const router = useRouter();

  // const handleSignOut = async () => {
  //   await supabase.auth.signOut();
  //   router.refresh();
  // };

  return (
    <div>
      <form action="/auth/sign-out" method="post">
        <Button className="w-full font-normal bg-[#1a162f] border-lightViolet border-2 cursor-pointer text-textViolet">
          <LogOut className="mr-2" />
          Log out
        </Button>
      </form>

      {/* <form action="/auth/sign-out" method="post">
        <button className="px-4 py-2 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form> */}
    </div>
  );
};

export default Logout;
