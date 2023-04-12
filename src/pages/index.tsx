import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface BlockProps {
  title: string;
  desc: string;
}
function Block({ title, desc }: BlockProps) {
  return (
    <div className="shrink-0 w-0 flex-1 max-sm:w-full">
      <h3 className="font-bold text-lg text-purple-300">{title}</h3>
      <p className="mt-3 text-base">{desc}</p>
    </div>
  );
}

const DESCS: BlockProps[] = [
  {
    title: 'Create Your Own Chat',
    desc: 'You can create you own chat with just two steps, no more knowledge required.Input your pre-defined prompt to customize the AI model, then Deploy.',
  },
  {
    title: 'Share/View Other ChatBots',
    desc: 'Share you customized chatbot with anyone on the platform or use chatbot which created by other people.If you need a chatbot to do specific task, search it first, someone may just developed one for you.',
  },
  {
    title: 'Embed You Chatbot Now',
    desc: 'Just copy embedding link to your website or use our sdk to integrate chatbot with one line of code',
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-700 to-green-500 w-full flex items-center justify-center flex-col min-h-screen p-14">
      <h1 className="text-white font-extrabold text-5xl text-center">
        <span className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent underline underline-offset-4 mr-3 max-sm:block">
          ChatForge
        </span>
        is under development
      </h1>

      <div className="flex flex-row justify-center w-2/3 space-x-6 mt-12 max-sm:w-full max-sm:p-5 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-8">
        {DESCS.map((block) => (
          <Block key={block.title} {...block} />
        ))}
      </div>
    </div>
  );
}
