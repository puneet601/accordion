import "./index.css";
import { children, useState } from "react";

export default function App() {
  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({ faqs }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordianItem
          num={index <= 9 ? `0${index + 1}` : index + 1}
          title={faq.title}
          curOpen={curOpen}
          onOpen={(num) => setCurOpen(num)}
          key={index}
        >
          {faq.text}
        </AccordianItem>
      ))}
    </div>
  );
}

function AccordianItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = curOpen === num;
  return (
    <div
      className={`item ${isOpen && "open"}`}
      onClick={(e) => (isOpen ? onOpen(null) : onOpen(num))}
    >
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
