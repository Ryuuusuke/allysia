import { Github, Mail, Facebook, ArrowDown, Umbrella } from "lucide-react";

function MobileView() {
	return (
		<div className="bg-black overflow-x-hidden">
			<header className="bg-black text-white flex items-center justify-center mt-18">
				<p className="text-3xl font-semibold">Welcome to Allysia!</p>
			</header>
			<div className="flex h-screen mt-[-7rem] ml-7 bg-black flex-col items-center justify-center text-white w-screen">
				<div className="flex flex-wrap gap-4">
					<div className="overflow-visible">
						<div className="relative w-fit h-fit">
							<Umbrella
								color="#007AFF"
								size={171}
								strokeWidth={0.7}
								className="absolute  -top-[51%] right-[-71%] -rotate-[-14deg]  hover:animate-spin"
							/>
							<img
								src="/pandoraside.jpg"
								alt="Pandora Image"
								className="w-44 h-44 rounded-3xl"
							/>
						</div>
					</div>
					<div className="flex mt-2 ml-1 flex-col gap-5">
						<div className="text-xl">
							<h2>Hi, My name is Alice!</h2>
							<h2>Leader of Allysia</h2>
						</div>
						<div className="text-[17px]">
							<p>I'm also known as Ryuuusuke</p>
							<p>I have big interests on linux</p>
							<p>and open source software.</p>
						</div>
					</div>
					<div className="ml-[0.5px] mt-4 gap-4 inline-flex">
						<a
							href="https://github.com/Ryuuusuke"
							className="hover:border-blue-800 border-3 rounded-full"
						>
							<Github size={36} className=" p-[6px] " />
						</a>
						<a
							href="https://fedi.lecturify.net/ryuuusuke"
							className="hover:border-blue-800 border-3 rounded-full"
						>
							<Facebook size={36} className="p-[6px]" />
						</a>
						<a
							href="mailto:alice@allysia.uno"
							className="hover:border-blue-800 border-3 rounded-full"
						>
							<Mail size={36} className="p-[6px]" />
						</a>
					</div>
				</div>
				<footer className="absolute bottom-20 left-0 right-0">
					<div className="flex gap-7 text-sm items-end justify-center flex-row relative">
						<p>© 2025 allysia</p>

						<a
							className="text-white"
							href="https://send.allysia.uno"
						>
							<p className="text-white hover:underline">
								uploads
							</p>
						</a>
						<div className="relative bg-transparent flex pt-2 flex-col items-center">
							<ArrowDown
								className="absolute bg-transparent animate-bounce rotate-[25deg] bottom-6 left-[88%] -translate-x-[50%] z-50"
								size={28}
							/>
							<a href="https://keyserver.ubuntu.com/pks/lookup?search=alice@allysia.uno&op=index">
								<p className="text-white pt hover:underline cursor-pointer mt-6">
									public key
								</p>
							</a>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default MobileView;
