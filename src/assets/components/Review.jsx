import SectionHeder from "./shared/SectionHeder";


const Review = () => {
  const reviews = [
    {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "This is an amazing product! Highly recommend it.",
    },
    {
        id: 2,
        name: "Jane Smith",
        rating: 3,
        comment: "I've been using this product for a while now and I'm really satisfied with the results.",
    },
    {
        id: 3,
        name: "Bob Johnson",
        rating: 4,
        comment: "Great product, very easy to use and the results are impressive.",
    },
    {
        id: 4,
        name: "Alice Brown",
        rating: 3,
        comment: "Excellent product, exceeded my expectations in every way.",
    },
    {
        id: 5,
        name: "Charlie Wilson",
        rating: 2,
        comment: "Outstanding product, delivers on its promises and more.",
    },
    {
        id: 6,
        name: "Diana Lee",
        rating: 5,
        comment: "I'm blown away by the quality and performance of this product.",
    }
  ]
    return (
        <section className="container mx-auto my-10 px-4">
            <SectionHeder title={"Student Reviews"} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {
                reviews.map((review) => (
                    <div className="border bg-white rounded p-4 mb-4" key={review.id}>
                        <h2 className="text-xl font-semibold">{review.name}</h2>
                        <h5 className="text-lg text-yellow-500 ">{Array.from({length: 5}, (_, i) => (
                            <span key={i} className={i < review.rating ? "text-yellow-500" : "text-gray-300"}>*</span>
                        ))}</h5>
                        <p className="text-gray-600">{review.comment}</p>
                    </div>
                ))
             }
            </div>
        </section>
    );
};

export default Review;