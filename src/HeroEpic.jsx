import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function HeroEpic() {
  const [mounted, setMounted] = useState(false);
  const [muted, setMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      muted ? audioRef.current.play() : audioRef.current.pause();
      setMuted(!muted);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4">
      <audio ref={audioRef} loop>
        <source src="/soner-theme.mp3" type="audio/mpeg" />
      </audio>
      <motion.h1 className="text-5xl md:text-7xl font-bold" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        SONER GÜMÜŞ
      </motion.h1>
      <p className="text-lg mt-6 text-gray-300">Digital Creator. Code Alchemist. Cyber Presence.</p>
      <div className="flex gap-4 mt-8 text-xl text-white/80">
        <a href="#"><FaGithub /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaEnvelope /></a>
        <button onClick={toggleAudio}>{muted ? <FaVolumeMute /> : <FaVolumeUp />}</button>
      </div>
    </div>
  );
}
