import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const contactInfo = [
  { icon: Mail, label: "Email", value: "deeps510813@gmail.com", href: "mailto:deeps510813@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8688789664", href: "tel:+918688789664" },
  { icon: MapPin, label: "Location", value: "Hyderabad, Telangana", href: null },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (_data: FormValues) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1600);
  };

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,hsl(265_35%_10%_/_0.4),transparent)]" />

      <div className="max-w-5xl mx-auto space-y-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-3"
        >
          <p className="font-mono text-xs text-primary tracking-widest uppercase">Let's connect</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Get in Touch</h2>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <p className="font-sans text-muted-foreground max-w-lg mt-2 leading-relaxed">
            I'm currently open to internship and project opportunities. Feel free to reach out — even just to say hi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl border border-primary/10 bg-card hover:border-primary/25 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a href={href} className="font-sans text-sm text-foreground hover:text-primary transition-colors truncate block">
                      {value}
                    </a>
                  ) : (
                    <p className="font-sans text-sm text-foreground">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-secondary/15 bg-secondary/5">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <p className="font-mono text-xs text-secondary">Available for opportunities</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-2xl border border-primary/10 bg-card p-6 md:p-8">
              {/* Top glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center gap-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-foreground mb-1">Message Sent!</h3>
                      <p className="text-muted-foreground font-sans text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your name"
                                    className="bg-background/60 border-border focus-visible:border-primary/50 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/40"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-xs" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Email</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="bg-background/60 border-border focus-visible:border-primary/50 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/40"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-xs" />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="What's on your mind?"
                                  className="min-h-[140px] bg-background/60 border-border focus-visible:border-primary/50 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none placeholder:text-muted-foreground/40"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-xs" />
                            </FormItem>
                          )}
                        />
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-12 flex items-center justify-center gap-2.5 rounded-xl bg-primary text-primary-foreground font-sans font-semibold text-sm hover:bg-primary/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-primary/20"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </button>
                      </form>
                    </Form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
