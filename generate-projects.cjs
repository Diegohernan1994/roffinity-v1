const fs = require('fs');
const path = require('path');

const templatePath = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/src/pages/projects/residential-shingle-roof.astro';
let template = fs.readFileSync(templatePath, 'utf8');

const projects = [
    {
        filename: 'shingle-roof-finished-views.astro',
        title: 'Shingle Roof Finished Views',
        breadcrumb: 'Finished Views',
        client: 'Private Residence',
        location: 'Los Angeles, CA',
        size: '2,800 sq. ft.',
        material: 'Premium Asphalt Shingles',
        style: 'Pitched / Shingle',
        heroImage: '/images/services/res-tile-roofing.jpg',
        desc1: 'This project showcases the finished views of a beautifully executed shingle roof installation. The homeowner selected premium asphalt shingles to complement the classic architecture of the property while ensuring long-lasting weather protection.',
        desc2: 'Our team focused on meticulous edge detailing and proper ventilation to maximize the lifespan of the roof. The finished surface provides excellent curb appeal and robust defense against the Southern California climate.',
        desc3: 'Completed on schedule, this roof not only enhances the home’s aesthetic but also improves energy efficiency, backed by a comprehensive warranty for complete peace of mind.'
    },
    {
        filename: 'roof-preparation-aerial.astro',
        title: 'Roof Preparation Aerial',
        breadcrumb: 'Roof Preparation',
        client: 'Suburban Home',
        location: 'Orange County, CA',
        size: '3,500 sq. ft.',
        material: 'Synthetic Underlayment',
        style: 'Pitched Roof',
        heroImage: '/images/services/res-metal-roofing.jpg',
        desc1: 'A successful roofing project begins with thorough preparation. This aerial view captures the critical stages of removing the old roofing material, inspecting the structural decking, and applying the first layers of defense.',
        desc2: 'We installed a high-performance synthetic underlayment and reinforced the valleys with premium ice and water shields. This meticulous preparation prevents future leaks and provides a flawless canvas for the final shingles.',
        desc3: 'Proper preparation is the unseen foundation of every Roofinity project, ensuring that the visible results are matched by invisible, uncompromising durability.'
    },
    {
        filename: 'dormer-roof-progress.astro',
        title: 'Dormer Roof Progress',
        breadcrumb: 'Dormer Roof',
        client: 'Historic Renovation',
        location: 'Pasadena, CA',
        size: '4,100 sq. ft.',
        material: 'Architectural Shingles',
        style: 'Pitched / Dormers',
        heroImage: '/images/services/com-pvc-roofing.jpg',
        desc1: 'Working on dormer roofs requires precision and specialized flashing techniques. This work-in-progress gallery highlights our specialized approach to waterproofing complex architectural features.',
        desc2: 'Our skilled craftsmen carefully stepped the flashing around each dormer window, ensuring water is effectively channeled away from vulnerable seams. We seamlessly integrated the dormer sections with the main roof pitch.',
        desc3: 'The intricate workmanship involved in this dormer project highlights Roofinity’s dedication to mastering even the most challenging roof geometries.'
    },
    {
        filename: 'roofing-work-property.astro',
        title: 'Roofing Work Property Views',
        breadcrumb: 'Property Views',
        client: 'Modern Estate',
        location: 'Beverly Hills, CA',
        size: '5,000 sq. ft.',
        material: 'Slate Shingles',
        style: 'Pitched Roof',
        heroImage: '/images/services/com-liquid-applied.jpg',
        desc1: 'This modern estate demanded a roofing solution that matched its luxurious aesthetic. These property views show the integration of high-end roofing materials with contemporary architectural lines.',
        desc2: 'We utilized premium slate-style shingles that offer the timeless beauty of natural stone without the immense weight. The installation included custom metal drip edges and discrete ridge ventilation systems.',
        desc3: 'The finished roof ties the entire property together, delivering an upscale appearance with uncompromising structural integrity.'
    },
    {
        filename: 'low-slope-surface.astro',
        title: 'Low-Slope Surface View',
        breadcrumb: 'Low-Slope Roof',
        client: 'Commercial Property',
        location: 'Burbank, CA',
        size: '12,000 sq. ft.',
        material: 'TPO Single-Ply Membrane',
        style: 'Flat / Low-Slope',
        heroImage: '/images/services/res-slate-shingles.jpg',
        desc1: 'Commercial low-slope roofs require robust waterproofing and excellent thermal performance. This surface view demonstrates a flawless TPO single-ply membrane installation.',
        desc2: 'The white, reflective surface dramatically reduces cooling costs for the building interior. We heat-welded all seams to create a continuous, monolithic barrier against pooling water and heavy rains.',
        desc3: 'Designed for longevity and energy efficiency, this low-slope system provides a maintenance-friendly, highly durable cap to this busy commercial facility.'
    },
    {
        filename: 'residential-property-views.astro',
        title: 'Residential Property Views',
        breadcrumb: 'Residential Roof',
        client: 'Family Residence',
        location: 'Santa Monica, CA',
        size: '2,400 sq. ft.',
        material: 'Cool Roof Shingles',
        style: 'Pitched / Shingle',
        heroImage: '/images/services/res-corrugated-roofing.jpg',
        desc1: 'Coastal homes require roofing that can withstand salt air and bright sun. This project utilized Title 24 compliant Cool Roof shingles to enhance energy efficiency and property value.',
        desc2: 'The installation included upgrading the existing ventilation system to optimize airflow in the attic, reducing the overall heat load on the home during the summer months.',
        desc3: 'The stunning final result perfectly complements the home’s exterior color palette while meeting the strict environmental standards of modern California building codes.'
    },
    {
        filename: 'shingle-roof-geometry.astro',
        title: 'Shingle Roof Geometry',
        breadcrumb: 'Roof Geometry',
        client: 'Custom Build',
        location: 'Glendale, CA',
        size: '3,800 sq. ft.',
        material: 'Dimensional Asphalt',
        style: 'Pitched / Shingle',
        heroImage: '/images/services/com-epdm-roofing.jpg',
        desc1: 'Complex roof geometry, including multiple valleys, hips, and varying pitches, presents a unique challenge that Roofinity excels at. This project highlights our precision in complex layouts.',
        desc2: 'Every angle and intersection was meticulously measured, cut, and layered. We installed woven valleys and heavy-duty ridge caps to ensure maximum wind resistance at the highest stress points.',
        desc3: 'The geometric complexity of this roof is now its greatest asset, beautifully highlighted by the shadow lines of the dimensional asphalt shingles.'
    },
    {
        filename: 'roof-details-closer-look.astro',
        title: 'Roof Details Closer Look',
        breadcrumb: 'Roof Details',
        client: 'Heritage Home',
        location: 'Long Beach, CA',
        size: '2,900 sq. ft.',
        material: 'Premium Clay Tile',
        style: 'Roof Surfaces and Details',
        heroImage: '/images/services/com-roof-coatings.jpg',
        desc1: 'The difference between a good roof and a great roof is in the details. This closer look showcases our craftsmanship in installing premium clay tiles and custom copper flashing.',
        desc2: 'We focused heavily on the intricate details around the chimney, skylights, and vents, fabricating custom metalwork to ensure a watertight seal that will last for generations.',
        desc3: 'These up-close views reveal the uncompromising quality standard that Roofinity applies to every single tile, fastener, and flashing component.'
    }
];

projects.forEach(p => {
    let newContent = template;
    
    // Replace Meta Title
    newContent = newContent.replace(/title="[^"]+"/, 'title="' + p.title + ' | Roofinity Projects"');
    
    // Replace H1
    const titleParts = p.title.split(' ');
    const firstWord = titleParts.shift();
    const restOfTitle = titleParts.join(' ');
    newContent = newContent.replace(/<h1 class="section-heading" style="color: #fff !important;">.*?<\/h1>/, '<h1 class="section-heading" style="color: #fff !important;">' + firstWord + ' <span>' + restOfTitle + '</span></h1>');
    
    // Replace Breadcrumb
    newContent = newContent.replace(/<li class="active" style="color: #fff;">.*?<\/li>/, '<li class="active" style="color: #fff;">' + p.breadcrumb + '</li>');
    
    // Replace Hero Image
    newContent = newContent.replace(/background-image: url\('\/images\/services\/res-asphalt-shingles\.jpg'\)/g, "background-image: url('" + p.heroImage + "')");
    newContent = newContent.replace(/<img src="\/images\/services\/res-roof-replacement\.jpg" class="img-responsive" alt="Residential Shingle Roof Replacement"/g, '<img src="' + p.heroImage + '" class="img-responsive" alt="' + p.title + '"');
    
    // Replace Info
    newContent = newContent.replace(/Private Residence/, p.client);
    newContent = newContent.replace(/Riverside, CA/, p.location);
    newContent = newContent.replace(/3,200 sq\. ft\./, p.size);
    newContent = newContent.replace(/GAF Timberline HDZ/, p.material);
    newContent = newContent.replace(/Pitched \/ Shingle/, p.style);
    
    // Replace Content
    newContent = newContent.replace(/This residential project in Riverside required a complete tear-off.*?<\/p>/, p.desc1 + '</p>');
    newContent = newContent.replace(/Our factory-certified crews replaced 15 sheets of damaged plywood.*?<\/p>/, p.desc2 + '</p>');
    newContent = newContent.replace(/The project was completed in just under three days, minimizing disruption.*?<\/p>/, p.desc3 + '</p>');
    
    fs.writeFileSync(path.join('c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/src/pages/projects', p.filename), newContent, 'utf8');
});
console.log('8 Project Pages Generated Successfully.');

