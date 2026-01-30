import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How long does a typical project take?",
        answer:
            "Project timelines vary depending on scope and complexity. Smaller projects may take a few days, while larger productions can take several weeks. We provide clear timelines before starting.",
    },
    {
        question: "Do you offer post-production services?",
        answer:
            "Absolutely. Our post-production services include video editing, color grading, sound mixing, mastering, visual effects, and final delivery optimized for your target platforms.",
    },
    {
        question: "Can you help with creative direction?",
        answer:
            "Yes. We collaborate closely with clients on concept development, scripting, storyboarding, and creative direction to ensure the final result aligns with your brand vision.",
    },
    {
        question: "Do you work with small businesses or only large brands?",
        answer:
            "We work with everyone—from startups and independent creators to established brands and agencies. Our services are flexible and scalable to fit your needs and budget.",
    },
    {
        question: "What equipment do you use?",
        answer:
            "We use professional-grade cameras, lighting, audio recording equipment, and industry-standard software to ensure high-quality production and reliable results.",
    },
    {
        question: "How do we get started?",
        answer:
            "Simply reach out through our contact form or email us with your project details. We’ll schedule a consultation to understand your goals and propose the best approach.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-full lg:max-w-screen-2xl mx-auto px-4 pt-32 relative z-10">
            <p className="text-[#939393] helvetica-regular uppercase mb-3">Frequently Asked Questions</p>
            <h2 className="text-[80px] leading-18 lg:text-[150px] lg:leading-24 uppercase text-[#9EFF50]">
                FAQs
            </h2>

            <div className="space-y-4 mt-20 group">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-[#282828] rounded overflow-hidden hover:bg-[#1a1a1a]"
                    >
                        {/* Question */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-5 cursor-pointer"
                        >
                            <span className="text-left font-medium uppercase text-3xl tracking-wide lg:text-7xl">{faq.question}</span>
                            <span className="text-9xl leading-0 group-hover:text-[#9EFF50]">
                                {activeIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        {/* Answer */}
                        <AnimatePresence initial={false}>
                            {activeIndex === index && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-5 pt-0 helvetica-light text-[#939393] lg:text-xl">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
