import axios from "axios";
import { useState } from "react";
import { chat } from "../BaseService";

export interface IChat {
  prompt: string;
  content: string;
}

export const useOpenAIChat = () => {
  const [messages, setMessages] = useState<IChat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    if (!message) return;
    chat(message).then(handleApiResponse).catch(handleApiResponse);
    event.target.reset();
  };

  const handleApiResponse = (response: any) => {
    const newMessage = response.data;
    setMessages([...messages, newMessage]);
    setIsLoading(false);
    setMessage("");
  };

  const defaultQuestion = (message: string) => {
    setIsLoading(true);
    if (!message) return;
    chat(message).then(handleApiResponse).catch(handleApiResponse);
    setMessage("");
  };

  const clear = () => {
    setMessages([]);
  };

  return {
    messages,
    handleSubmit,
    defaultQuestion,
    isLoading,
    clear,
    setMessage,
    message,
  };
};
