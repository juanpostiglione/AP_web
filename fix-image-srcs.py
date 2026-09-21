import os

base = "/Users/juanpostiglione/Desktop/AP_web"

replacements = [
    # Pipe Clamps
    ("https://apasociados.com/images/Pipe-Clamps/1-Pipe-Clamps.jpg",  "images/pipe-clamps/1-Pipe-Clamps.jpg"),
    ("https://apasociados.com/images/Pipe-Clamps/2-Pipe-Clamps.jpg",  "images/pipe-clamps/2-Pipe-Clamps.jpg"),
    ("https://apasociados.com/images/Pipe-Clamps/3-Pipe-Clamps.jpg",  "images/pipe-clamps/3-Pipe-Clamps.jpg"),
    # RubbaFIX
    ("https://apasociados.com/images/RubbaFIX/RubbaFIX-1-350.png",    "images/rubbafix/RubbaFIX-1-350.png"),
    ("https://apasociados.com/images/RubbaFIX/RubbaFIX-2-600.jpg",    "images/rubbafix/RubbaFIX-2-600.jpg"),
    # WorldFluid
    ("https://apasociados.com/images/WorldFluid/Ecomat-E.jpg",        "images/worldfluid/Ecomat-E.jpg"),
    ("https://apasociados.com/images/WorldFluid/WF-Trat-Filtros.jpg", "images/worldfluid/WF-Trat-Filtros.jpg"),
    ("https://apasociados.com/images/WorldFluid/WF-Tuberias.jpg",     "images/worldfluid/WF-Tuberias.jpg"),
    ("https://apasociados.com/images/WorldFluid/WF-Valvulas.jpg",     "images/worldfluid/WF-Valvulas.jpg"),
    # Orange logo
    ("https://apasociados.com/images/Orange/logo-pb9wruv2f4yqukne5nlot1ntlqz1y2tmn2yrao418e.jpeg", "images/orange/logo-orange.jpeg"),
    # U-Coat
    ("https://apasociados.com/images/Orange/U-Coat/ucoat-image01-300x225.jpg",   "images/u-coat/ucoat-image01-300x225.jpg"),
    ("https://apasociados.com/images/Orange/U-Coat/ucoat-image02-1-300x225.jpg", "images/u-coat/ucoat-image02-1-300x225.jpg"),
    ("https://apasociados.com/images/Orange/U-Coat/ucoat-image03-300x225.jpg",   "images/u-coat/ucoat-image03-300x225.jpg"),
    ("https://apasociados.com/images/Orange/U-Coat/ucoat-image04-300x225.jpg",   "images/u-coat/ucoat-image04-300x225.jpg"),
    ("https://apasociados.com/images/Orange/U-Coat/ucoat-image05-300x225.jpg",   "images/u-coat/ucoat-image05-300x225.jpg"),
    ("https://apasociados.com/images/Orange/U-Coat/ucoat-image06-300x225.jpg",   "images/u-coat/ucoat-image06-300x225.jpg"),
    # NRX
    ("https://apasociados.com/images/NRX/1-NRX.jpg",                            "images/nrx/1-NRX.jpg"),
    ("https://apasociados.com/images/NRX/2-NRX.jpg",                            "images/nrx/2-NRX.jpg"),
    ("https://apasociados.com/images/NRX/3-NRX.jpg",                            "images/nrx/3-NRX.jpg"),
    ("https://apasociados.com/images/NRX/Applications-Steel-300.jpg",           "images/nrx/Applications-Steel-300.jpg"),
    ("https://apasociados.com/images/NRX/Applications-Aluminum-300.jpg",        "images/nrx/Applications-Aluminum-300.jpg"),
    ("https://apasociados.com/images/NRX/Applications-photo-D-300x300.jpg",     "images/nrx/Applications-photo-D-300x300.jpg"),
    ("https://apasociados.com/images/NRX/slide1-700x346.jpg",                   "images/nrx/slide1-700x346.jpg"),
    ("https://apasociados.com/images/NRX/solution-photo1-279x179.jpg",          "images/nrx/solution-photo1-279x179.jpg"),
    ("https://apasociados.com/images/NRX/solution-photo2-279x179.jpg",          "images/nrx/solution-photo2-279x179.jpg"),
    ("https://apasociados.com/images/NRX/solution-photo3-279x179.jpg",          "images/nrx/solution-photo3-279x179.jpg"),
    ("https://apasociados.com/images/NRX/solution-photo-279x179.jpg",           "images/nrx/solution-photo-279x179.jpg"),
    ("https://apasociados.com/images/NRX/producg-description-photo-400x265.jpg","images/nrx/producg-description-photo-400x265.jpg"),
    ("https://apasociados.com/images/NRX/application-photo2-400x197.jpg",       "images/nrx/application-photo2-400x197.jpg"),
    ("https://apasociados.com/images/NRX/Results-Image1-360x286.jpg",           "images/nrx/Results-Image1-360x286.jpg"),
    ("https://apasociados.com/images/NRX/Results-Image2-360x286.jpg",           "images/nrx/Results-Image2-360x286.jpg"),
    ("https://apasociados.com/images/NRX/Technical4-300x300.jpg",               "images/nrx/Technical4-300x300.jpg"),
    # Chesterton product images
    ("https://chesterton.com/Admin/Public/GetImage.ashx?width=640&image=%2fFiles%2fImages%2fProducts%2fCCS_1.webp&format=webp",                        "images/chesterton/CCS_1.webp"),
    ("https://chesterton.com/Admin/Public/GetImage.ashx?width=640&image=%2fFiles%2fImages%2fProducts%2fflowguardian_1.webp&format=webp",               "images/chesterton/flowguardian_1.webp"),
    ("https://chesterton.com/Admin/Public/GetImage.ashx?width=640&image=%2fFiles%2fImages%2fProducts%2f390_1.webp&format=webp",                        "images/chesterton/390_1.webp"),
    ("https://chesterton.com/Admin/Public/GetImage.ashx?width=640&image=%2fFiles%2fImages%2fProducts%2fARC_855_1.webp&format=webp",                    "images/chesterton/ARC_855_1.webp"),
    ("https://chesterton.com/Admin/Public/GetImage.ashx?width=640&image=%2fFiles%2fImages%2fProducts%2fGraphMax_1.webp&format=webp",                   "images/chesterton/GraphMax_1.webp"),
    ("https://chesterton.com/Admin/Public/GetImage.ashx?width=640&image=%2fFiles%2fImages%2fProducts%2fPacking_Bucket_open_1800x1800.webp&format=webp","images/chesterton/Packing_Bucket_open.webp"),
    # Chesterton group images
    ("https://chesterton.com/Admin/Public/GetImage.ashx?width=640&crop=0&image=/Files%2fImages%2fProducts%2fGroupImages%2fComponent_Seals_2025_v3.webp&format=webp", "images/chesterton/Component_Seals_2025_v3.webp"),
    ("https://chesterton.com/Admin/Public/GetImage.ashx?width=640&crop=0&image=/Files%2fImages%2fProducts%2fGroupImages%2fSlurry_Seals.webp&format=webp",            "images/chesterton/Slurry_Seals.webp"),
    ("https://chesterton.com/Admin/Public/GetImage.ashx?image=%2FImages%2FProducts%2FGroupImages%2FSplit_Seals.webp&width=640&format=webp",                          "images/chesterton/Split_Seals.webp"),
    ("https://chesterton.com/Admin/Public/GetImage.ashx?image=%2FImages%2FProducts%2FGroupImages%2FGas_Seals.webp&width=640&format=webp",                           "images/chesterton/Gas_Seals.webp"),
    ("https://chesterton.com/Admin/Public/GetImage.ashx?image=%2FImages%2FProducts%2FGroupImages%2FSeal_Support_Systems_2025.webp&width=640&format=webp",           "images/chesterton/Seal_Support_Systems_2025.webp"),
    ("https://chesterton.com/Admin/Public/GetImage.ashx?image=%2FImages%2FProducts%2FGroupImages%2FGasket_and_Flange_Sealing_Subgroup.webp&width=640&format=webp",  "images/chesterton/Gasket_and_Flange_Sealing_Subgroup.webp"),
    ("https://chesterton.com/Admin/Public/GetImage.ashx?image=%2FImages%2FProducts%2FGroupImages%2FMaintenance_Specialties_Subgroup.webp&width=640&format=webp",    "images/chesterton/Maintenance_Specialties_Subgroup.webp"),
    ("https://chesterton.com/Admin/Public/GetImage.ashx?image=%2FImages%2FProducts%2FGroupImages%2Fdevices-accessories-group-1920x1080v3.webp&width=640&format=webp","images/chesterton/devices-accessories-group.webp"),
    # Third-party images now local
    ("https://www.rocketseals.com/assets/images-bucket/Hydraulic-and-Pneumatic-Seals.jpg",                                                                          "images/third-party/Hydraulic-and-Pneumatic-Seals.jpg"),
    ("https://cdn.skfmediahub.skf.com/api/public/0901d1968054ca73/png_highpreview_800/R01-R_Special_png_highpreview_800.png",                                        "images/third-party/R01-R_Special.png"),
    ("https://www.balseal.com/wp-content/uploads/2021/12/seal-sb-p02-500x439-1.png",                                                                                "images/third-party/seal-sb-p02.png"),
    ("https://media.wd40.lat/app/uploads/2020/12/10112424/WD40-specialist-limpiador-desengrasante-liquido-usos.jpg.webp",                                            "images/third-party/WD40-specialist-usos.webp"),
    ("https://interflon.imgix.net/assets/interflon/Grasa-espesa-para-rodamientos_2025-08-28-102839_htdq.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=453&q=60&w=680&s=26f19340e1f8b005c0664a6d4cc4929a", "images/third-party/Grasa-espesa-rodamientos.jpg"),
    ("https://0f8146e1fc.clvaw-cdnwnd.com/525d82050247f7116bdd28101bb335ef/200000054-ee3e8ee3e9/Maintenance.png?ph=0f8146e1fc",                                      "images/third-party/Maintenance.png"),
    ("https://assets.nov.com/NCP4N68N/at/ngwbb6p85fmjwfv36f7nfvtc/Corrosion_Control_Pipe_Thread_Cleaning.jpg?auto=webp&format=jpg",                                 "images/third-party/Corrosion_Control_Pipe_Thread_Cleaning.jpg"),
    ("https://www.belzona.com/assets/data/images/products/gallery/thumb_1131_3.jpg",                                                                                "images/third-party/belzona-thumb_1131_3.jpg"),
    ("https://www.cemix.com/wp-content/uploads/2022/05/elementos-estructurales-de-concreto.jpg",                                                                    "images/third-party/elementos-estructurales-concreto.jpg"),
    ("https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/sc/1725353176-normal-titanium-clad-copper.jpg",                             "images/third-party/titanium-clad-copper.jpg"),
    ("https://legacy.garlock.com/sites/default/files/styles/product_gallery_image/public/images/products/GMP1_4x3.png?itok=hE5wzaGi",                              "images/third-party/GMP1_4x3.png"),
    ("https://aw-chesterton.es/wp-content/uploads/2025/01/rbs_photo_1024.jpg",                                                                                      "images/third-party/rbs_photo_1024.jpg"),
    ("https://img.directindustry.com/images_di/photo-mg/17469-15682870.jpg",                                                                                       "images/third-party/directindustry-17469-15682870.jpg"),
    ("https://www.polymerconcepts.com/hubfs/Polymer-rotating-2.jpg",                                                                                                "images/third-party/Polymer-rotating-2.jpg"),
    ("https://www.valveseal.es/wp-content/uploads/2020/06/Valvula-de-flotador-valveseal-300x300.jpg",                                                               "images/third-party/Valvula-de-flotador-valveseal.jpg"),
    # Previously blocked chesterton.com.mx -> local replacements
    ("https://www.chesterton.com.mx/wp-content/uploads/2022/04/IMA004-Feb-24-2022-05-54-42-66-PM.png", "images/chesterton/442C_1.webp"),
    ("https://www.chesterton.com.mx/wp-content/uploads/2017/07/mechanical_seals_copy.png",             "images/chesterton/155_1.webp"),
    ("https://www.chesterton.com.mx/wp-content/uploads/2018/02/170L_seal_400x345.png",                 "images/chesterton/170L_1.webp"),
]

html_files = [f for f in os.listdir(base) if f.endswith('.html')]
changed_files = []

for fname in html_files:
    path = os.path.join(base, fname)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content
    for old, new in replacements:
        content = content.replace(old, new)
    if content != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        changed_files.append(fname)

print("Updated %d files:" % len(changed_files))
for fn in sorted(changed_files):
    print("  " + fn)
print("Done.")
