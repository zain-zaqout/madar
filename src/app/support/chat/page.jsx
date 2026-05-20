"use client";
import SubjectSelection from "@/components/SubjectSelection";
import ChatInterface from "@/components/ChatInterface";
import {useChat} from "@/contexts/SupportChatContext";

const page = () => {
    const { isValid } = useChat()
    return (
        <>
            {isValid ? (
                <ChatInterface />)
                : (<SubjectSelection />)}
        </>
    )
}

export default page