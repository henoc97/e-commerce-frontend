
const NewsletterSection: React.FC = () => {
    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#E8CDAF]">
                    Stay in Tune with Our Newsletter
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                    Get the latest news, exclusive offers, and music inspiration
                    delivered straight to your inbox.
                </p>
                <div className="w-full max-w-sm space-y-2">
                    <form className="flex space-x-2">
                        <Input
                            className="flex-1 bg-white text-[#5B4B8A]"
                            placeholder="Enter your email"
                            type="email"
                            required
                        />
                        <Button
                            className="bg-[#00B2A9] text-white"
                            type="submit"
                        >
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSection;
