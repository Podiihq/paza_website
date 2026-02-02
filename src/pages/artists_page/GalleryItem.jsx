import { motion } from 'framer-motion';

export function GalleryItem({ url, title, style, index }) {
    return (
        <motion.div
            className="absolute top-0 left-0 bg-gray-800 overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
            style={{
                ...style,
                width: 300,
                height: 400,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.2 } }}
        >
            <img
                src={url}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white text-4xl tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 uppercase">
                    {title}
                </span>
            </div>
        </motion.div>
    );
}
