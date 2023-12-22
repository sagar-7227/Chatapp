import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/chatModels/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import Chatbox from "../components/Chatbox";
import { useEffect } from "react";

const Chatpage = () => {
  // when the user  left we have to fetch the chats again
  const [fetchAgain, setFetchAgain] = useState(false);
  // const [refresh, setRefresh] = useState(false);
  const { user } = ChatState();

  // useEffect(() => {
  //   if (!refresh) {
  //     window.location.reload();
  //     setRefresh(true);
  //   }

  // }, []);

  return (

    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      {/* bgGradient="linear(to-t,#7928CA,#FF0080)" */}
      <Box display="flex" justifyContent={'space-between'} w={'100%'} h={'91.5vh'} p={'10px'} bgGradient="linear(to-t,#7928CA,#FF0080)" >

        {user && <MyChats fetchAgain={fetchAgain} />}

        {user && <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}

      </Box >

    </div>
  );
};

export default Chatpage;