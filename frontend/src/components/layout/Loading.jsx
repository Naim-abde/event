
const Loading = () => {
  return (
    <div className=" flex items-center justify-center">

    <div className="flex flex-col items-center gap-6">

        {/* INSTAGRAM STYLE LOADER */}
        <div className="relative w-16 h-16">

            <div className="absolute inset-0 rounded-full border-[3px] border-zinc-800"></div>

            <div className="absolute inset-0 rounded-full border-[3px] border-white border-t-transparent animate-spin"></div>

        </div>

        {/* TEXT */}
       

    </div>

</div>
  )
}

export default Loading