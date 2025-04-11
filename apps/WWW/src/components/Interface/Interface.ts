/**
 * Use this to remove the need for interface documents cluttering up the stores and components etc 
 */

// src/components/AccordionComp.vue
export interface AccordionInterface {
        records: {
                id: string;
                branch_id: string;
                title: string;
                content: string;
                expiry: string;
                subject: string
        }[]
}

// src/components/BlogCards.vue
export interface BlogInterface {
        records:
          {   
                id: string;
                card_image:string;
                card_header:string;
                card_intro:string;
                page_main_header:string;
                page_sub_header:string;
                page_images:string;
                page_content:string;
          }[];
}

export interface TabInterface {
        title: string,
        records:
        {
                name: string;
                href: string;
                active: boolean;
        }[],
}