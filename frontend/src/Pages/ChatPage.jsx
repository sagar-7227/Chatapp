import { Box, HStack, Flex,Spacer } from "@chakra-ui/layout";
import { useState } from "react";
// import MyChats from "../components/MyChats";
import SideDrawer from "../components/chatModels/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import Chatbox from "../components/Chatbox";

const Chatpage = () => {
    const [fetchAgain, setFetchAgain] = useState(false);
    const { user } = ChatState();

    return (

        <>
            <div style={{ width: "100%" }}>
                {user && <SideDrawer />}

            </div>

            <Box d="flex" justifyContent={'space-between'} w={'100%'} h={'91.5vh'} p={'10px'}>
                {/* {user && <MyChats fetchAgain={fetchAgain} />} */}

                <Flex minWidth="max-content" alignItems="center" gap={'2'}>
                {/* {user && <MyChats fetchAgain={fetchAgain} />} */}
                <Spacer />
                {user && <Chatbox />}



                {/* {user && (
                <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
                // )} */}
            </Flex>
        </Box >
      
      </>
    // </div>
  );
};

export default Chatpage;