import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return ( <section 
    id="about"
    className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                About <span className="text-primary"> Me</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                    Muhammad Asandy Putra - Fullstack Web & Mobile Developer
                    </h3>

                    <p className="text-muted-foreground">
                    I am a fullstack web and mobile developer with a strong focus on building
                    modern applications that combine intuitive design with reliable performance.
                    With experience in developing both web-based and mobile systems, I am used to
                    working with the latest technologies to deliver solutions that are not only
                    functional but also provide an excellent user experience.
                    </p>

                    <p className="text-muted-foreground">
                    I believe that software development is not just about writing code, but also
                    about creating products that bring real value to people. That’s why I always
                    prioritize quality, efficiency, and innovation in every project I work on.
                    Moving forward, I am committed to continuously growing and contributing
                    through meaningful digital solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg">Web and Mobile Development </h4>
                                <p className="text-muted-foreground">
                                    Creating responsive website and web applications with modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg">UI/UX Design </h4>
                                <p className="text-muted-foreground">
                                    Designing intuitive user interface and seamless user experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg">Project Management </h4>
                                <p className="text-muted-foreground">
                                    Leading projects from conception to completion with agile methodologies. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    );
};