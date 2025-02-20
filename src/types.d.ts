export type LoginRQ = {
  email: string;
  password: string;
};

export type SignupRQ = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type Messenges = {
  messenger_id: number;
  conversation_id: number;
  sender_id: number;
  content: string;
  is_read: boolean;
  sent_at: Date;
};
