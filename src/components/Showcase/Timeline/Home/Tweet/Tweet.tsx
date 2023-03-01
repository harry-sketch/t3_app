export const Tweet = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <textarea
          placeholder="what's happening?"
          className="w-full resize-none rounded-lg border-none bg-custom-2/95 p-4 text-black placeholder:text-black focus:outline-none"
          rows={3}
        />
        <span className="absolute right-3 bottom-3 text-black">words</span>
      </div>
      <button
        type="button"
        className="ml-auto rounded-lg bg-primary p-2.5 text-right"
      >
        Tweet
      </button>
    </div>
  );
};
