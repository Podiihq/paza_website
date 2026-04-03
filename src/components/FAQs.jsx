import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How long does a typical project take?",
        answer: [
            "Project timelines vary depending on scope and complexity. Smaller projects may take a few days, while larger productions can take several weeks. We provide clear timelines before starting.",
        ]
    },
    {
        question: "Do you offer post-production services?",
        answer: [
            "We provide full post-production for audio and visual projects",
            "Audio: Mixing and mastering for music in Stereo, 5.1 Surround, or Dolby Atmos (7.1.4).",
            "Visual: Editing, color grading, music composition, sound design, 2D/3D animation, special effects, and film audio (Stereo, 5.1, or Dolby Atmos)."
        ]
    },
    {
        question: "Can you help with creative direction?",
        answer: [
            "Yes — and it's one of the things we do best.",
            "Paza Studios is home to a diverse hub of creative talent. We don't just execute tasks; we help shape and elevate your vision. From brand identity to campaign messaging, our team provides the creative direction needed to ensure every project serves your broader brand or communication goals.",
            "This ability to blend strategic direction with artistic execution is what truly sets us apart."
        ]
    },
    {
        question: "Do you work with small businesses or only large brands?",
        answer: [
            "We work with all businesses — small startups to global brands. Tailor-made packages for every budget and goal. Wherever you are, however you are, we Paza (amplify) your ideas."
        ]
    },
    {
        question: "What equipment do you use?",
        answer: [
            "At Paza Studios, we use a carefully curated blend of high-end analog and digital tools to deliver professional results across audio, video, and animation.",
        ],
        answer_lists: [
            {
                title: "Audio Production",
                items: [
                    "Mics: WA-251, MA-67, Shure KSM44",
                    "Preamp: Modified WA - 87 EQ",
                    "Compressor: Modified Klark Teknik LA - 2A",
                    "Audio Interfaces: Apollo Twin & Audient Oria",
                    "Monitors & Sub: Kali Audio monitors",
                    "DAWs: Pro Tools, Logic Pro, Nuendo",
                ]
            },
            {
                title: "Video Post-Production",
                items: [
                    "Editing & Grading: DaVinci Resolve",
                    "Color Hardware: Blackmagic Micro Panel",
                    "Screens: BenQ SW series",
                    "Cameras: Sony FX6, RED Komodo, Canon C70",
                ]
            },
            {
                title: "Animation & VFX",
                items: [
                    "Tools: After Effects, Blender, Cinema 4D, Maya",
                    "Compositing: DaVinci Resolve Fusion",
                ]
            }
        ]
    },
    {
        question: "How do we get started?",
        answer: [
            "Reach out – Contact us via our website form, email, or phone. Share as much detail as you can about your project (audio, video, animation, or a combination)",
            "Free consultation – We'll schedule a call to discuss your vision, goals, timeline, and budget.",
            "Custom proposal – We'll provide a tailored package and quote based on your specific needs.",
            "Kickoff – Once you approve the proposal, we begin the creative process and Paza (amplify) your ideas."
        ]

    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-full lg:max-w-screen-2xl mx-auto px-4 pt-32 relative z-10">
            <p className="text-[#939393] helvetica-regular uppercase lg:mb-3">Frequently Asked Questions</p>
            <h2 className="text-[80px] leading-18 lg:text-[150px] lg:leading-24 uppercase text-[#9EFF50]">
                FAQs
            </h2>

            <div className="space-y-4 mt-10 lg:mt-20 group">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-[#282828] rounded overflow-hidden hover:bg-[#1a1a1a]">
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
                                    <ul className="list-disc p-5 pt-0 helvetica-light text-[#939393] lg:text-lg space-y-2">
                                        {faq.answer.map((text, i) => (
                                            <li key={i} className="helvetica-regular mx-6">{text}</li>
                                        ))}
                                    </ul>

                                    <div className="px-4 lg:px-8 pb-6">
                                        {faq.answer_lists && (
                                            <div className="mt-4 space-y-4">
                                                {faq.answer_lists.map((list, i) => (
                                                    <div key={i}>
                                                        <h4 className="text-white uppercase font-semibold mb-2 helvetica-regular">
                                                            {list.title}
                                                        </h4>
                                                        <ul className="list-disc ml-6 space-y-1 text-[#939393]">
                                                            {list.items.map((item, j) => (
                                                                <li key={j} className="helvetica-regular">{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
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
