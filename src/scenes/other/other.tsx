import { SelectedPage } from "../../shared/types"
import { motion } from "framer-motion";
import HText from "../../shared/HText"
import cards from "../../assets/cards.png";
import teatru2 from "../../assets/teatru2.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OtherEvents = ( {setSelectedPage}: Props) => {

  return <section
  id="otherevents"
  className="mx-auto min-h-full w-5/6 py-20"> 
    
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.OtherEvents)}
    >
      <motion.div 
        className="md:my-5  text-white"
        initial="hidden"
            whileInView="visible"
            viewport={{ once : true, amount: 0.5} }
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
                hidden: { opacity: 0, x:-50},
                visible: { opacity: 1, x: 0},
            }}>
        
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        <img 
          className="mx-auto"
          alt="cards"
          src={cards}
        
        />
        <div>
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] text-white">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once : true, amount: 0.5} }
                transition={{ duration: 1 }}
                variants={{
                    hidden: { opacity: 0, x:50},
                    visible: { opacity: 1, x: 0},
                }}>
                <HText>
                5ᵗʰ{" "}
                  <span className="text-blueish">GRADE</span>
                </HText>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once : true, amount: 0.5} }
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
                hidden: { opacity: 0, x: 50},
                visible: { opacity: 1, x: 0},
            }}>
            <p className="my-5 text-white">
            It is scary to realise how early the fear of failure starts to show in children. But the best way to combat it in general, 
            is by starting from the root, since the beginning. In order to do that, we wanted to talk to the youngest students in school,
             the 5 graders and find out their opinion on this topic. Most of the times, their innocent thoughts are the most illuminating.

            </p>
            <p className="mb-5 text-white">
            We decided to continue teaching and helping implement a growth mindset into the young minds in our high school and create as
             much as possible a healthy environment in which students to learn. 
            </p>
            <p className="mb-5 text-white">
            For this activity, we used learning through gamification, so it would be educative, but also fun.
             We used question cards about failure to break the ice on the topic and induce them the most important 
             lesson that they should pick in every situation; to always try new things without being afraid of a bad outcome,
             as that would be in fact a good thing, a learning opportunity. 
            </p>
            <p className="mb-5 text-white">
            The most heartwarming thing was to see them understand right away what we have told them, 
            not by seeing them knotting their heads, but by observing their actions; Even though some of 
            them were extremely afraid to speak their mind in front of the class,
             they all overstepped their comfort zones so they would eventually grow.
            </p>
          </motion.div>

        </div>
      </div>
      
        
      </motion.div>

      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        <img 
          className="mx-auto"
          alt="teatru"
          src={teatru2}
        
        />
        <div>
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] text-white">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once : true, amount: 0.5} }
                transition={{ duration: 1 }}
                variants={{
                    hidden: { opacity: 0, x:50},
                    visible: { opacity: 1, x: 0},
                }}>
                <HText>
                Liberation through Culture 
                </HText>
              </motion.div>
            </div>
          </div>

          <motion.div>
            <p className="mb-5 text-white">
            At the Multiart Festival for Inmates Dana Cenușă "Liberation through Culture," on November 12,
             I watched three plays performed by theater groups from three different penitentiaries. They share a common passion, demonstrating that even after failure, there is still an opportunity to achieve great things. 
            What matters most are resilience and the desire to bring change to the world.
            </p>
            <p className="my-5 text-2xl text-white"> „THE NIGHT ISSUES”
            </p>
            <p className="mb-5 text-white">
            One of the most emotional plays we’ve watched so far, “The Ninth Step” tells a story 
            about the trauma caused by addiction and the effort to make a positive change in life.
             The play explores how children grow up too soon, taking on the responsibility of caring for parents suffering from alcoholism.
              It delves into the struggles of a child who, after experiencing abandonment, becomes obsessed with being perfect, 
              believing they are to blame for the negative conditions affecting those around them. Ultimately,
               the message conveyed is that it is never too late to learn from past failures and use those lessons to grow, 
            both personally and in your relationships with others.

            </p>
          </motion.div>
        </div>
      </div>
      <p className="my-5 text-2xl text-white"> “RECOVERIES”
            </p>
            <p className="mb-5 text-white">
            At first glance, the play gives the impression of being a comedy or a musical, with music, dance, and good cheer.
             However, at its core, it carries a deeply emotional undertone, revealing the untold stories of inmates and the reasons 
             behind their circumstances. The focus is also on release as “a second birth” and a recovery of life, which inspired the play’s title.
              It was a highly original production, striking a perfect balance between comedy and tragedy,
             demonstrating that their lives are not solely defined by their failures, despite the consequences they face.
            </p>
            <p className="my-5 text-2xl text-white"> „FREEDOM”
            </p>
            <p className="mb-5 text-white">
            The play focused on the lives of inmates and how they spend their time in prison.
             It delves into the challenges they face, portraying a scenario where they must choose 
             between freedom and “a suitcase full of money.” This symbolizes the temptation to continue engaging in illegal activities,
             abandoning any notion of change or transformation.
            </p>
    </motion.div>
  </section>
};

export default OtherEvents