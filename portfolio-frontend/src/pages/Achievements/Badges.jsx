const badges = [
  {
    title: "Well-Architected Proficient",
    issuer: "Amazon Web Services Training and Certification",
    date: "11/5/2025",
    image:
      "https://images.credly.com/size/160x160/images/b870667f-00a3-48d7-b988-9c02b441b883/image.png",
    link: "https://www.credly.com/badges/b3f35a59-3f1a-4dc0-b8fb-a45f694bd339",
  },
  {
    title: "Google AI Essentials V1",
    issuer: "Coursera",
    date: "10/9/2025",
    image:
      "https://images.credly.com/images/ea3eec65-ddad-4242-9c59-1defac0fa2d9/image.png",
    link: "https://www.credly.com/badges/99650135-6381-42cf-aebe-9a7012297c84",
  },
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    date: "6/29/2025",
    image:
      "https://images.credly.com/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png",
    link: "https://www.credly.com/badges/937f3440-073f-44db-a919-10062eb15484",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "8/21/2021",
    image:
      "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
    link: "https://www.credly.com/badges/1649e7e8-67a5-4772-ba86-edf94afb6b44",
  },
];

const Badges = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {badges.map((badge, index) => (
        <a
          key={index}
          href={badge.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group relative overflow-hidden
            rounded-2xl p-[1px]
            bg-gradient-to-br
            from-yellow-400/40 via-yellow-300/20 to-yellow-200/40
            dark:from-slate-400/40 dark:via-slate-300/20 dark:to-slate-200/40
            transition-all duration-500
            hover:scale-[1.03]
          "
        >
          {/* Inner Card */}
          <div
            className="
              relative z-10 h-full rounded-2xl p-6
              bg-white/80 dark:bg-slate-900/80
              backdrop-blur-xl
              border border-black/5 dark:border-white/10
              shadow-md
              group-hover:shadow-2xl
              transition-all duration-500
            "
          >
            {/* Glow Effect */}
            <div
              className="
                absolute inset-0 -z-10 opacity-0 group-hover:opacity-100
                transition duration-500
                bg-gradient-to-br
                from-yellow-300/30 via-transparent to-yellow-200/30
                dark:from-slate-300/30 dark:to-slate-200/30
                blur-2xl
              "
            />

            {/* Badge Image */}
            <img
              src={badge.image}
              alt={badge.title}
              className="
                w-24 h-24 mx-auto mb-5
                drop-shadow-md
                group-hover:scale-110
                transition duration-500
              "
            />

            {/* Title */}
            <h3 className="text-center text-base font-semibold text-gray-900 dark:text-gray-100">
              {badge.title}
            </h3>

            {/* Issuer */}
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-1">
              {badge.issuer}
            </p>

            {/* Date */}
            <p className="text-center text-xs text-gray-400 mt-2">
              Issued {badge.date}
            </p>

            {/* CTA */}
            <p
              className="
                mt-4 text-center text-xs font-medium
                text-yellow-600 dark:text-slate-300
                opacity-0 group-hover:opacity-100
                translate-y-2 group-hover:translate-y-0
                transition-all duration-500
              "
            >
              View on Credly →
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Badges;
