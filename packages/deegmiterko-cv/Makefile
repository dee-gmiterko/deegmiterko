VARIANTS := non-it non-it-cz plain frontend agentic frontend-agentic dev-ops dev-ops-plain dev-ops-agentic scraping ecommerce platform-improve game-design-numerical data-analytics quality-assurance quality-assurance-agentic data-engineer data-engineer-agentic backend backend-plain ai-engineer computer-graphics agentic-backend frontend-data product agentic-ecommerce ecommerce-plain plane planest machine-learning machine-learning-plain full-stack-plain full-stack full-stack-agentic game-backend game-rendering frontend-plain product-plain
OUT := 2026
NAME := Dominik Gmiterko

all: $(VARIANTS)

$(VARIANTS):
	mkdir -p "$(OUT)/$@"
	pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$(OUT)/$@" -jobname="$(NAME)" "\def\variant{$@}\input{main.tex}"
	pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$(OUT)/$@" -jobname="$(NAME)" "\def\variant{$@}\input{main.tex}"

.PHONY: all $(VARIANTS)
