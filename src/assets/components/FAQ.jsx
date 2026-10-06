import SectionHeder from "./shared/SectionHeder";

const FAQ = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <SectionHeder
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services."
      />
      {/* daisyUi template */}
      <div className="space-y-3 mt-8 max-w-3xl mx-auto">
        <details
          className="collapse bg-base-100 border border-base-300"
          name="my-accordion-det-1"
          open
        >
          <summary className="collapse-title font-semibold">
            How it works?
          </summary>
          <div className="collapse-content text-sm">
            Our platform provides a seamless experience for users to access
            educational resources, track progress, and engage with the community.
          </div>
        </details>
        <details
          className="collapse bg-base-100 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">
           How it help me to learn?
          </summary>
          <div className="collapse-content text-sm">
            Our platform offers personalized learning paths, interactive content, and progress tracking to help you learn more effectively.
          </div>
        </details>
        <details
          className="collapse bg-base-100 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">
            How to Check my progress?
          </summary>
          <div className="collapse-content text-sm">
            You can check your progress by visiting the "My Progress" section in your account dashboard, where you'll find detailed insights and statistics.
          </div>
        </details>
        <details
          className="collapse bg-base-100 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">
           it relly progress me to learn?
          </summary>
          <div className="collapse-content text-sm">
            Yes, our platform is designed to enhance your learning experience by providing structured content, interactive exercises, and regular assessments to track your improvement.
          </div>
        </details>
      </div>
    </section> 
  );
};

export default FAQ;
