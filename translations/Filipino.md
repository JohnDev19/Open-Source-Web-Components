## Isalin

[<img src="https://cdn.statically.io/gh/hjnilsson/country-flags/master/svg/us.svg" height="15">](https://github.com/JohnDev19/Open-Source-Web-Components/blob/main/README.md) [<img src="https://cdn.statically.io/gh/hjnilsson/country-flags/master/svg/ph.svg" height="15">](https://github.com/JohnDev19/Open-Source-Web-Components/blob/main/translations/Filipino.md)

-------------

# Open Source Web Components

Isang koleksyon ng simpleng mga web component (hal., mga button, form, carousel) na maaaring mapabuti ng mga beginners o lumikha ng mga bagong component.

## Laman ng Nilalaman

- [Panimula](#panimula)
- [Paano Magsimula](#paano-magsimula)
- [Nag-aambag](#nag-aambag)
- [Patakaran ng Ugalì](#patakaran-ng-ugali)
- [Lisensya](#lisensya)
- [Isalin](#isalin)

## Panimula

Ang Open Source Web Components ay isang proyektong pinapatakbo ng komunidad na naglalayong magbigay ng isang aklatan ng mga reusable at customizable na web components. Layunin namin na lumikha ng isang kapaligiran ng pag-aaral para sa mga beginners habang binubuo ang isang mahalagang mapagkukunan para sa mga developer ng lahat ng antas ng kasanayan.

## Paano Magsimula

### Mga Pangunahing Kinakailangan

- Batayang kaalaman sa HTML, CSS, at JavaScript
- Isang modernong web browser na sumusuporta sa Web Components (karamihan ng mga pinakabagong browser ay sumusuporta)

### Pag-install

1. I-clone ang repository:
   ```sh
   git clone https://github.com/JohnDev19/open-source-web-components.git
   ```

2. Navigahin sa direktoryo ng proyekto:
   ```sh
   cd open-source-web-components
   ```

3. Buksan ang `index.html` file sa iyong browser upang makita ang pagpapakita ng mga component.

### Pagdagdag ng Bagong Web Component

Upang magdagdag ng bagong web component sa proyekto, sundin ang mga hakbang na ito:

1. Kopyahin ang `template.html` file mula sa root directory:
   ```sh
   cp template.html components/iyong-pangalan-ng-component.html
   ```

2. Palitan ang `iyong-pangalan-ng-component.html` ng isang pangalan na magiging kakaiba na naglalarawan ng iyong component.

3. Idagdag ang iyong HTML, CSS, at JavaScript para sa bagong component sa loob ng file na ito. Siguraduhing kasama ang iyong CSS at JavaScript nang direkta sa template file para sa kaginhawahan ng paggamit.

4. Kung ang iyong component ay gumagamit ng mga larawan, idagdag ang mga ito sa tamang direktoryo sa loob ng `assets` (e.g., `assets/buttons/buttons-img` para sa mga larawan ng buttons) at tukuyin ang mga ito nang naaayon sa iyong HTML.

## Nag-aambag

Malugod naming tinatanggap ang mga ambag mula sa mga developer ng lahat ng antas ng kasanayan! Narito kung paano ka makakatulong:

1. I-fork ang repository
2. Lumikha ng bagong branch (`git checkout -b feature/bagong-component`)
3. Gawin ang iyong mga pagbabago
4. I-commit ang iyong mga pagbabago (`git commit -am 'Magdagdag ng bagong component'`)
5. I-push sa branch (`git push origin feature/bagong-component`)
6. Lumikha ng bagong Pull Request

Para sa mas detalyadong mga tagubilin, mangyaring tingnan ang aming [CONTRIBUTING.md](CONTRIBUTING.md) file.

### Mga Ideya para sa Nag-aambag

- Pabutihin ang mga umiiral na mga component
- Magdagdag ng mga bagong feature sa mga component
- Lumikha ng mga bagong component
- Pabutihin ang dokumentasyon
- Ayusin ang mga bugs
- Magdagdag ng mga test

## Patakaran ng Ugalì

Nangangako kami na magbibigay ng isang maaliwalas at kasaliang karanasan para sa lahat. Mangyaring basahin ang aming [Code of Conduct](CODE_OF_CONDUCT.md) bago makilahok sa aming komunidad.

## Lisensya

Ang proyektong ito ay lisensyado sa ilalim ng MIT License - tingnan ang [LICENSE](LICENSE) file para sa mga detalye.

