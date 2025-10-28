
export type Project = {
  title: string;
  coauthors?: string[];
  venue?: string;
  year?: string | number;
  abstract: string;
};

export const projects: Project[] = [
  {
    title: "Climb or Exit: Career Progression and Outmigration",
    // coauthors: ["Coauthor A", "Coauthor B"],
    // venue: "Working Paper",
    year: "2025",
    abstract:
      "Do information frictions induce foreign workers to leave the host labor market earlier and climb more slowly? I build a dynamic career model with Bayesian learning about worker ability, assignment along a job ladder, and market frictions, where migrants face noisier performance signals. Using German linked employer–employee data, I estimate the model by GMM. Identification comes from (i) within-worker changes in assignments and wage residuals to pin down learning, (ii) a mixture in stayers’ wage growth to recover outside-offer arrival and renegotiation, and (iii) differential hazards of promotion vs. exit across rungs and tenure to separate internal from external frictions. Counterfactuals evaluate which levers—reducing signal noise, lowering internal mobility costs, or thickening outside options—most raise retention and close wage-growth gaps. The framework decomposes the “foreign glass ceiling” into learning, assignment, and monopsony channels.",
  },
  {
    title: "Bureaucrats’ engagement and the agility of the public administration: Insights from German reunification",
    coauthors: ["Giuseppe Cappellari", "Nadja Dweger", "Anna Gumpert"],
    // venue: "Draft",
    year: "2025",
    abstract:
      "States are frequently confronted with unforeseen challenges that require bureaucrats to assume responsibilities beyond their day-to-day duties. Yet, economic research has predominantly focused on improving day-to-day bureaucratic performance. This paper studies how states can motivate bureaucrats to engage in new responsibilities. We analyze how financial incentives and administrative directives affected bureaucratic engagement in the capacity-building efforts in the tax administration after German reunification. Drawing on detailed administrative records about individual bureaucrats, we develop and estimate a structural choice model of officials’ decisions whether, where, and how long to participate in capacity-building. Our results reveal that higher financial incentives substantially increase both participation probabilities and durations, while the administrative directives predominantly steer destination choices. Counterfactual simulations confirm that removing directives barely alters participation rates, but markedly redistributes capacity-building efforts across East German offices. These findings highlight that balancing financial rewards and administrative directives can significantly enhance public administration responsiveness during periods of structural change.",
  },
];
