const ProjectItem = () => {
  return (
    <div className="w-80 h-80 aspect-square rounded-xl hover:border border-dashed border-primary/20 duration-100">
      <div
        className="group relative w-80 aspect-square hover:rotate-2 rounded-xl border border-primary/20 bg-background/5 backdrop-blur-xl transition-all duration-300"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% calc(100% + 0px), calc(100% + 0px) 100%, 0% 100%)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.clipPath =
            "polygon(0% 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.clipPath =
            "polygon(0% 0%, 100% 0%, 100% calc(100% + 0px), calc(100% + 0px) 100%, 0% 100%)";
        }}
      >
        <div className="folded-corner transition-all w-[28.5px] h-[28.5px] border group-hover:border-primary/20 z-20 bg-foreground/5  rounded-br-md absolute -right-6 -bottom-6 group-hover:right-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 rotate-180 duration-300" />
        <div className="p-8 flex flex-col h-full justify-between">
          <h3 className="text-lg font-bold">عنوان پروژه</h3>
          <p className="text-sm mt-2">توضیح کوتاه پروژه</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
