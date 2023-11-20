import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" h-screen flex flex-col  ">
      <main className="flex-grow">
        <div className=" bg-homeHero bg-cover bg-center bg-slate-900">
          <div className="py-10 h-full flex max-w-7xl m-auto">
            <div className="max-w-2xl my-auto px-5">
              <p className="font-semibold text-purple-300 max-md:text-4xl max-[280px]:text-3xl text-7xl mb-3 font-serif">
                Uniting Hearts and Souls in Worship
              </p>
              <p className="text-base font-light text-purple-300 mb-5 font-serif">
                A place where faith, fellowship, and spiritual growth come
                together. Join us as we embrace the power of community, deepen
                our connection with God and experience the joy of worship.
              </p>
              <p className="bg-purple-900 w-fit py-3 px-5 rounded-md text-purple-300 cursor-pointer font-serif">
                Discover More
              </p>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="flex flex-col  w-full ">
            <div className="m-auto ">
              <div className="text-center max-w-xl text-lg">
                <p className="font-semibold text-purple-700 max-md:text-4xl max-[280px]:text-3xl text-6xl mb-3 font-serif">
                  Our Mission
                </p>
                <p className="text-lg font-light text-purple-400 mb-5 font-serif">
                  Mission of The Apostolic Church
                </p>
                <p className="text-lg font-light text-purple-600 mb-5 font-serif">
                  The main object of the Church shall be to teach and preach the
                  Gospel of our Lord Jesus Christ, and continue steadfastly in
                  the Apostles’ doctrine, Breaking of Bread, Fellowship and
                  Prayers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl m-auto py-5">
          <div className="grid max-md:grid-cols-1 grid-cols-4 min-[768px]:grid-cols-3 lg:grid-cols-4 gap-5 px-2">
            <div className="bg-purple-200 px-5 py-5 rounded-md shadow-black/20 shadow-xl">
              <p className="bg-purple-900/75 w-fit px-4 py-2 rounded-full text-white shadow-lg mb-2">
                1
              </p>
              <p className="text-lg font-serif font-semibold">Our Devotion</p>
              <p className="text-base font-serif font-light my-3">
                Embark on a transformative journey through a year of daily
                reflections, exploring the boundless grace and wisdom found in
                the Scriptures. Each day is an invitation to delve deeper into
                the wellspring of divine wisdom, discovering profound truths
                that resonate with the rhythm of life.
              </p>
              <Link
                href="/devotion/home"
                className="bg-purple-400 w-fit py-2 px-3 rounded-md text-white cursor-pointer font-serif"
              >
                Discover Devotion
              </Link>
              {/* <p className="bg-purple-400 w-fit py-2 px-3 rounded-md text-white cursor-pointer font-serif">
                Discover Devotion
              </p> */}
            </div>
            <div className="bg-[#0c356a92] px-2 py-5 rounded-md shadow-black/20 shadow-xl">
              <p className="bg-[#0C356A]/75 w-fit px-4 py-2 rounded-full text-white shadow-lg mb-2">
                2
              </p>
              <p className="text-lg font-serif font-semibold">
                Our Worship Hymn
              </p>
              <p className="text-base font-serif font-light my-3">
                Join us in the symphony of worship as we raise our voices in
                praise and adoration. Our worship hymn is more than a melody;
                it&lsquo;s a collective expression of gratitude and awe for the
                grace that sustains us.Let the hymn resonate in your soul,
                drawing you closer to the divine presence.
              </p>
              <p className="bg-[#0C356A] w-fit py-2 px-3 rounded-md text-white cursor-pointer font-serif">
                Discover Hymn
              </p>
            </div>
            <div className="bg-purple-900 px-2 py-5 rounded-md shadow-black/20 shadow-xl">
              <p className="bg-purple-600/75 w-fit px-4 py-2 rounded-full text-white shadow-lg mb-2">
                3
              </p>
              <p className="text-lg font-serif font-semibold text-white">
                Our Sunday School
              </p>
              <p className="text-base font-serif font-light my-3 text-white">
                Explore timeless truths in our Sunday School, a vibrant space
                for young hearts and curious minds. Guided by dedicated
                teachers, we journey through stories of faith, love, and
                resilience. More than a place of learning, it&lsquo;s a
                nurturing ground for spiritual growth.
              </p>
              <p className="bg-purple-500 w-fit py-2 px-3 rounded-md text-white cursor-pointer font-serif">
                Discover Sunday School
              </p>
            </div>
            <div className="bg-[#860a35bd] px-2 py-5 rounded-md shadow-black/20 shadow-xl">
              <p className="bg-[#AF2655] w-fit px-4 py-2 rounded-full text-white shadow-lg mb-2">
                4
              </p>
              <p className="text-lg font-serif font-semibold text-white">
                Our Tenets
              </p>
              <p className="text-base font-serif font-light my-3 text-white">
                At the core of our community are the foundational beliefs that
                shape our identity and guide our journey of faith. Our tenets
                are not just words on paper; they are the bedrock of our
                spiritual foundation. Rooted in the Scriptures, we affirm the
                essential principles of love, compassion, and service.
              </p>
              <p className="bg-[#860a35] w-fit py-2 px-3 rounded-md text-white cursor-pointer font-serif">
                Discover Tenets
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="max-w-full bg-purple-900 py-5 px-3">
          <div className="flex max-md:flex-col justify-between gap-3">
            <div className="lg:flex gap-2">
              <p className="text-white text-base font-serif max-md:font-normal font-semibold">
                The Apostolic Church Nigeria
              </p>
              <p className="text-white text-base font-serif max-md:font-normal font-semibold">
                © {currentYear}. All Rights Reserved.
              </p>
            </div>
            <div>
              <p className="text-white text-base font-serif max-md:font-normal font-semibold">
                {" "}
                Toismart Ltd
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
